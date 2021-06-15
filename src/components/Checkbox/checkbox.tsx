import React, { ChangeEvent, useCallback, useState } from 'react';

import * as S from './checkbox.styles';
import { CheckProps } from './checkbox.type';

export const Checkbox = ({
    name,
    id,
    getValue,
}: CheckProps): JSX.Element => {
    const [currentValue, setValue] = useState<boolean>(false);

    const change = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.checked);
            if (getValue) getValue(e.target.checked);
        },
        [getValue],
    );

    return (
        <S.Checkbox
            name={name}
            id={id}
            checked={currentValue}
            onChange={change}
        />
    );
};
