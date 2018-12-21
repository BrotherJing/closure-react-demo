/**
 * externs for react component prop type
 */

/**
 * List
 */
/* eslint-disable quote-props */
let defaultProps = { // eslint-disable-line no-unused-vars
  className: '',
  nonInteractive: false,
  dense: false,
  avatarList: false,
  twoLine: false,
  singleSelection: false,
  selectedIndex: -1,
  handleSelect: () => {},
  wrapFocus: true,
  'aria-orientation': VERTICAL,
  tag: 'ul',
};
/* eslint-enable quote-props */

/**
 * ListDivider
 */
defaultProps = {
  className: '',
  tag: 'li',
  role: 'separator',
};

/**
 * ListGroup
 */
defaultProps = {
  className: '',
  children: null,
  tag: 'div',
};

/**
 * ListGroupSubheader
 */
defaultProps = {
  className: '',
  children: '',
  tag: 'h3',
};

/**
 * ListItemGraphic
 */
defaultProps = {
  tabbableOnListItemFocus: false,
  className: '',
  tabIndex: -1,
  graphic: {},
};

/**
 * ListItemMeta
 */
defaultProps = {
  tabbableOnListItemFocus: false,
  className: '',
  tabIndex: -1,
  meta: null,
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
  tag: 'li',
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

/**
 * TopAppBar
 */
defaultProps = {
  actionItems: null,
  className: '',
  fixed: false,
  navigationIcon: null,
  prominent: false,
  short: false,
  shortCollapsed: false,
  style: {},
  title: '',
};

/**
 * FixedAdjust
 */
defaultProps = {
  tag: 'main',
  className: '',
};

/**
 * Select
 */
defaultProps = {
  box: false,
  className: '',
  disabled: false,
  floatingLabelClassName: '',
  id: null,
  isRtl: false,
  lineRippleClassName: '',
  nativeControlClassName: '',
  notchedOutlineClassName: '',
  onChange: () => {},
  outlined: false,
  options: [],
  value: '',
};

/**
 * NativeControl
 */
defaultProps = {
  className: '',
  children: null,
  disabled: false,
  foundation: {
    handleFocus: () => {},
    handleBlur: () => {},
  },
  id: null,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onTouchStart: () => {},
  onMouseDown: () => {},
  setRippleCenter: () => {},
  handleDisabled: () => {},
  value: '',
};

/**
 * Cell
 */
defaultProps = {
  align: undefined,
  children: undefined,
  className: '',
  columns: undefined,
  desktopColumns: undefined,
  order: undefined,
  phoneColumns: undefined,
  tabletColumns: undefined,
  tag: 'div',
};

/**
 * Grid
 */
defaultProps = {
  align: undefined,
  className: '',
  fixedColumnWidth: false,
  tag: 'div',
};

/**
 * Row
 */
defaultProps = {
  className: '',
  tag: 'div',
};
