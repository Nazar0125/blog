import React from 'react';
import {Button} from "@material-ui/core";
import styles from '../AuthDialog.module.scss';

interface MainFormProps {
    onOpenLogin: () => void;
}
export const MainForm: React.FC<MainFormProps> = ({onOpenLogin}) => {
    return (
        <div>
            <Button className="mb-15" variant="contained" fullWidth>
                ВКонтакте
            </Button>
            <Button className="mb-15" variant="contained" fullWidth>
                Google
            </Button>
            <Button onClick={onOpenLogin} className="mb-15" variant="contained" fullWidth>
                Через почту
            </Button>
        </div>
    )
};
