import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

/**
 * Custom hook for detecting when an element enters the viewport
 * Useful for triggering animations when elements come into view
 * 
 * @param options IntersectionObserver options
 * @returns [ref, isIntersecting] - Ref to attach to the element and boolean indicating if element is visible
 */
export function useIntersectionObserver<T extends Element>({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  triggerOnce = false,
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Save current element reference
    const element = elementRef.current;
    
    // If no element to observe, return early
    if (!element) return;

    // Cleanup previous observer if it exists
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        
        // Update state
        setIsIntersecting(isElementIntersecting);
        
        // If element is intersecting and we only want to trigger once, unobserve
        if (isElementIntersecting && triggerOnce && observerRef.current) {
          observerRef.current.unobserve(element);
        }
      },
      { root, rootMargin, threshold }
    );

    // Start observing
    observerRef.current.observe(element);

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [elementRef, isIntersecting];
}

/**
 * Hook for applying animations when elements enter the viewport
 * 
 * @param options IntersectionObserver options
 * @returns [ref, isVisible] - Ref to attach to the element and boolean indicating if element is visible
 */
export function useAnimateOnScroll<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  return useIntersectionObserver<T>({
    threshold: 0.1,
    triggerOnce: true,
    ...options,
  });
}
