import PropTypes from 'prop-types' //impt (ImportPropTypes)
import Button from './Button'

const Header = ({year, myname, project}) => { //rafce (ReactArrowFunctionComponentExport)
    const onClick = () => {
        console.log('Click');
    }
    
    return (
        <header className='header'>
            <h1> {/* inline style {{}}, background-color==backgroundColor*/}
                {year} {myname} {project}
            </h1>
            <Button color="green" text="Add" onClick={onClick} />
        </header>
    );
};

Header.defaultProps = {
    project: 'Task Tracker',
};

Header.propTypes = { //p lowercase
    year: PropTypes.number,
    myname: PropTypes.string, //P uppercase
    project: PropTypes.string.isRequired,
}

//inline object style {headingStyle}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header;
