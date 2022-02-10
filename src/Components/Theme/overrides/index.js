import {merge} from 'lodash';
import Input from "./Input";

export default function componentsOverride(theme) {
    return merge (
        Input(theme),
    )
    
};
