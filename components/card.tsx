import { View, Text, ViewProps } from 'react-native';

export function Card({ className = '', ...props }: ViewProps & { className?: string }) {
  return (
    <View
      className={`rounded-2xl border border-light-300 bg-secondary p-4 shadow-sm ${className}`}
      {...props}
    />
  );
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <Text className={`text-xl font-semibold text-light-100 ${className}`}>{children}</Text>;
}

export function CardDescription({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <Text className={`text-sm text-light-300 ${className}`}>{children}</Text>;
}
