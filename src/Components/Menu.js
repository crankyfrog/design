import './Menu.css';

function Menu(props){
    return(
        <div className="Menu col-2">
            <a className="menuItem" href={props.link1}>{props.name1}</a>
            <a className="menuItem" href={props.link2}>{props.name2}</a>
            <a className="menuItem" href={props.link3}>{props.name3}</a>
        </div>
    );
}

export default Menu;