import { cn } from '@/lib/utils';
import { Pressable, Text, PressableProps } from 'react-native';

type Variant = 'default' | 'outline' | 'accent' | 'ghost' | 'destructive';

interface ButtonProps extends PressableProps {
    className?: string;
    children: React.ReactNode;
    variant?: Variant;
    disabled?: boolean;
}

export function Button({
    className = '',
    children,
    variant = 'default',
    disabled = false,
    ...props
}: ButtonProps) {

    const baseStyle = 'px-4 py-2 rounded-md items-center justify-center';
    const disabledStyle = 'opacity-50';

    const variants: Record<Variant, string> = {
        default: 'bg-primary text-light-100',
        outline: 'border border-light-300 text-light-100',
        accent: 'bg-accent text-dark-100',
        ghost: 'bg-transparent text-light-100',
        destructive: 'bg-red-600 text-white',
    };

    return (
        <Pressable
            className={cn(baseStyle, variants[variant], disabled && disabledStyle, className)}
            disabled={disabled}
            {...props}
        >
            <Text className={cn('text-base font-medium', disabled && 'text-light-300')}>
                {children}
            </Text>
        </Pressable>
    );
}