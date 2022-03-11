import {merge} from 'lodash';
import Input from "./Input";
import Card from "./Card";

export default function ComponentsOverrides(theme) {
    return merge (
        Card(theme),
        Input(theme),
    );  
};
