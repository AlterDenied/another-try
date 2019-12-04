import  React  from 'react';
import {connect} from 'react-redux';
import Menu from 'Menu';

class MenuContainer extends React.Component {
    render () {
        <Menu />;
    }
}

const mapStateToProps = () => {
    return {};
}

const mapDispatchToProps = () => {
    return {};
} 

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);