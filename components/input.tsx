import { TextInput, TextInputProps } from 'react-native';
import clsx  from 'clsx';

export function Input({
    className = '',
    editable = true,
    ...props
} : TextInputProps & { className?: string }) {

    const baseStyle ='h-10 rounded-md border border-light-300 px-3 py-2 text-sm';
    const enabledStyle = 'bg-dark-100 text-light-100 placeholder:text-light-300';
    const disabledStyle = 'bg-dark-200 text-light-300';

    return (
        <TextInput
            className={clsx(baseStyle, editable ? enabledStyle : disabledStyle, className)}
            placeholderTextColor="#9CA4AB"
            editable={editable}
            {...props}
        />
    );
}