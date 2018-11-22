/**
 * React attribute not included in react.ext.js
 */
var ReactAttribute = {};
ReactAttribute.onSelect;

/**
 * externs for react component prop type
 */

 /**
  * Button
  */
var defaultProps = {
    raised: false,
    unelevated: false,
    outlined: false,
    dense: false,
    disabled: false,
    unbounded: false,
    initRipple: () => { },
    className: '',
    icon: null,
    children: [],
};

/**
 * List
 */
defaultProps = {
    className: '',
    children: [],
    nonInteractive: false,
    dense: false,
    avatarList: false,
    twoLine: false,
    singleSelection: false,
    selectedIndex: -1,
    handleSelect: () => {},
    wrapFocus: true
};

/**
 * ListItem
 */
defaultProps = {
    className: '',
    classNamesFromList: [],
    attributesFromList: {},
    childrenTabIndex: -1,
    tabIndex: -1,
    shouldFocus: false,
    shouldFollowHref: false,
    shouldToggleCheckbox: false,
    onKeyDown: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
};

/**
 * ListItemText
 */
defaultProps = {
    tabbableOnListItemFocus: false,
    tabIndex: -1,
    className: '',
    primaryText: '',
    secondaryText: '',
};

/**
 * Icon
 */
defaultProps = {
    disabled: false,
};

/**
 * Input
 */
defaultProps = {
    className: '',
    inputType: 'input',
    disabled: false,
    isValid: undefined,
    foundation: {
      activateFocus: () => {},
      deactivateFocus: () => {},
      autoCompleteFocus: () => {},
      setDisabled: () => {},
      setTransformOrigin: () => {},
      setValue: () => {},
      handleValidationAttributeMutation_: () => {},
    },
    handleValueChange: () => {},
    id: null,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
    onMouseDown: () => {},
    onTouchStart: () => {},
    setDisabled: () => {},
    setInputId: () => {},
    handleFocusChange: () => {},
    value: '',
};

/**
 * TextField
 */
defaultProps = {
    className: '',
    dense: false,
    floatingLabelClassName: '',
    fullWidth: false,
    helperText: null,
    isRtl: false,
    leadingIcon: null,
    lineRippleClassName: '',
    notchedOutlineClassName: '',
    outlined: false,
    textarea: false,
    trailingIcon: null,
};

/**
 * NotchedOutline
 */
defaultProps = {
    className: '',
    isRtl: false,
    notch: false,
    notchWidth: 0,
};

/**
 * LineRipple
 */
defaultProps = {
    className: '',
    style: {},
    active: false,
    rippleCenter: 0,
};

/**
 * FloatingLabel
 */
defaultProps = {
    className: '',
    handleWidthChange: () => {},
    float: false,
};