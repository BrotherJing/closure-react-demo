import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {
        className,
        raised,
        unelevated,
        outlined,
        dense,
        icon,
        children,
        initRipple,
        unbounded, // eslint-disable-line no-unused-vars
        ...otherProps
    } = props;

    const classes = classnames('mdc-button', className, {
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined,
        'mdc-button--dense': dense,
    });

    const SemanticButton = props.href ? 'a' : 'button';

    return (
        <SemanticButton
            className={classes}
            ref={initRipple}
            {...otherProps}
        >
            {icon ? renderIcon(icon) : null}
            {children}
        </SemanticButton>
    );
};

const addClassesToElement = (classes, element) => {
    const propsWithClasses = {
        className: classnames(classes, element.props.className),
    };
    return React.cloneElement(element, propsWithClasses);
};

const renderIcon = (icon) => addClassesToElement('mdc-button__icon', icon);

Button.propTypes = {
    'raised': PropTypes.bool,
    'unelevated': PropTypes.bool,
    'outlined': PropTypes.bool,
    'dense': PropTypes.bool,
    'disabled': PropTypes.bool,
    'unbounded': PropTypes.bool,
    'initRipple': PropTypes.func,
    'className': PropTypes.string,
    'icon': PropTypes.element,
    'href': PropTypes.string,
    'children': PropTypes.array,
};

Button.defaultProps = {
    'raised': false,
    'unelevated': false,
    'outlined': false,
    'dense': false,
    'disabled': false,
    'unbounded': false,
    'initRipple': () => { },
    'className': '',
    'icon': null,
    'children': [],
};

export default Button;