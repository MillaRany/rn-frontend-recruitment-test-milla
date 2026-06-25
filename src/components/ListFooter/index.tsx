import { useMemo } from "react";
import ErrorFooter from "@/components/ErrorFooter";
import LoadingFooter from "@/components/LoadingFooter";

interface ListFooterProps {
  loading: boolean;
  error: unknown;
  hasData: boolean;
  statusCode?: number | null;
  onRetry?: () => void;
}

export default function ListFooter({ loading, error, hasData, statusCode, onRetry }: ListFooterProps) {
  const footer = useMemo(() => {
    if (loading) return <LoadingFooter />;
    if (error && hasData) return <ErrorFooter statusCode={statusCode} onRetry={onRetry} />;
    return null;
  }, [loading, error, hasData, statusCode, onRetry]);

  return footer;
}
