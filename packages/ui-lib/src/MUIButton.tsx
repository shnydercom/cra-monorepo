import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';

export interface MUIButtonProps extends ButtonProps {}

export const MUIButton = ({ ...props }: MUIButtonProps) => {
	// changing it just to show that the import works:
	props.centerRipple = true;
	props['aria-details'] = 'this is some ugly code'; //try to move a statement like this on separate lines and see what happens before commiting
	return <Button {...props} />;
};
