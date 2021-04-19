import PropTypes from 'prop-types' //impt (ImportPropTypes)

const Header = ({myname, project}) => { //rafce (ReactArrowFunctionComponentExport)
    return (
        <header>
            <h1> {/* inline style {{}}, background-color==backgroundColor*/}
                {myname} {project}
            </h1>
        </header>
    );
};

Header.defaultProps = {
    project: 'Task Tracker',
};

Header.propTypes = { //p lowercase
    myname: PropTypes.string, //P uppercase
    project: PropTypes.string,
}

//inline object style {headingStyle}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }
export default Header;
