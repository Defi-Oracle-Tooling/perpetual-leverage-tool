import { performance, PerformanceObserver } from 'perf_hooks';

interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: number;
}

const metrics: PerformanceMetrics[] = [];

// Set up performance observer
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    metrics.push({
      componentName: entry.name,
      renderTime: entry.duration,
      timestamp: Date.now(),
    });
  });
});

obs.observe({ entryTypes: ['measure'] });

// HOC for tracking component performance
export function withPerformanceTracking<P extends object>(
  componentName: string,
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  return function PerformanceTrackedComponent(props: P) {
    const markStart = `${componentName}-render-start`;
    const markEnd = `${componentName}-render-end`;
    const measureName = `${componentName}-render-measure`;

    React.useEffect(() => {
      performance.mark(markStart);
      
      return () => {
        performance.mark(markEnd);
        performance.measure(measureName, markStart, markEnd);
      };
    });

    return <WrappedComponent {...props} />;
  };
}

// Utility to get performance metrics
export const getPerformanceMetrics = () => metrics; 