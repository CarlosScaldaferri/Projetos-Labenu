import {TitleHeader} from './styled'
import { Label } from './styled'
import { Img } from './styled'

export const Header = (props) => {

    return(
        <TitleHeader>
            <Label>{props.name}</Label>
            <Img src={props.urlImg} alt={props.name}/>
            Insta4
        </TitleHeader>
    )
}