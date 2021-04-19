import PropTypes from 'prop-types' //impt (ImportPropTypes)
import Button from './Button'

const Header = ({myname, project}) => { //rafce (ReactArrowFunctionComponentExport)
    return (
        <header className='header'>
            <h1> {/* inline style {{}}, background-color==backgroundColor*/}
                {myname} {project}
            </h1>
            <Button color="green" text="Add"/>
        </header>
    );
};

Header.defaultProps = {
    project: 'Task Tracker',
};

Header.propTypes = { //p lowercase
    myname: PropTypes.string, //P uppercase
    project: PropTypes.string.isRequired,
}

//inline object style {headingStyle}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header;
