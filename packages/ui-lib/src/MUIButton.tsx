import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';

export interface MUIButtonProps extends ButtonProps {}

export const MUIButton = ({ ...props }: MUIButtonProps) => {
	// changing it just to show that the import works:
	props.centerRipple = true;
	return <Button {...props} />;
};
