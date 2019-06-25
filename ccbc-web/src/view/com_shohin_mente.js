import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link } from 'react-router-dom'
import { kanriListItems, restUrl, titleItems2 } from './tileData'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import { Manager, Target, Popper } from 'react-popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import MenuList from '@material-ui/core/MenuList'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import AddIcon from '@material-ui/icons/Add'
import Icon from '@material-ui/core/Icon'
import DeleteIcon from '@material-ui/icons/Delete'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  buttonFrame: {
    position: 'static',
    marginRight: 24
  },
  buttonFrame2: {
    position: 'static',
    marginRight: 0
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-left': {
    marginLeft: drawerWidth
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  'content-left': {
    marginLeft: -drawerWidth
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  },
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 1
      },
      '& $imageMarked': {
        opacity: 0
      },
      '& $imageTitle': {
        border: '4px solid currentColor'
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`,
    fontSize: '300%'
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  },
  chip: {
    height: '300%',
    margin: theme.spacing.unit
  },
  appBarColorDefault: {
    backgroundColor: 'rgba(255, 136, 0, 0.92)'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 350
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150
  },
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  menu: {
    width: 200
  }
})
let id = 0
function createData(name, price) {
  id += 1
  return { id, name, price }
}

const rows = [
  createData('お茶', 100),
  createData('ジュース', 120),
  createData('お煎餅', 120),
  createData('ポテトチップス', 130),
  createData('チョコレート', 100)
]
const currencies = [
  {
    value: '0',
    label: '　'
  },
  {
    value: '500',
    label: '～500円'
  },
  {
    value: '1000',
    label: '501円～1000円'
  },
  {
    value: '1500',
    label: '1001円～1500円'
  },
  {
    value: '2000',
    label: '1501円～2000円'
  }
]

class ComShohinMenteForm extends React.Component {
  state = {
    open: false,
    open2: false,
    anchor: 'left'
  }

  /** コンポーネントのマウント時処理 */
  componentWillMount() {
    var loginInfos = JSON.parse(sessionStorage.getItem('loginInfo'))

    for (var i in loginInfos) {
      var loginInfo = loginInfos[i]
      this.setState({ userid: loginInfo['userid'] })
      this.setState({ password: loginInfo['password'] })
      this.setState({ tShainPk: loginInfo['tShainPk'] })
      this.setState({ imageFileName: loginInfo['imageFileName'] })
      this.setState({ shimei: loginInfo['shimei'] })
      this.setState({ kengenCd: loginInfo['kengenCd'] })
    }
  }

  handleDrawerOpen = () => {
    this.setState({ open: true })
  }

  handleDrawerClose = () => {
    this.setState({ open: false })
  }

  handleLogoutClick = () => {
    // ログアウト時にsessionStorageをクリアする
    sessionStorage.clear()
  }

  handleToggle = () => {
    this.setState({ open2: !this.state.open2 })
  }

  handleToggleClose = event => {
    if (this.target1.contains(event.target)) {
      return
    }

    this.setState({ open2: false })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes, theme } = this.props
    const { anchor, open, open2 } = this.state
    const loginLink = props => <Link to="../" {...props} />

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {kanriListItems()}
      </Drawer>
    )

    let before = null
    let after = null

    if (anchor === 'left') {
      before = drawer
    } else {
      after = drawer
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
            classes={{ colorPrimary: this.props.classes.appBarColorDefault }}
            //colorPrimary="rgba(200, 200, 200, 0.92)"
            //color="secondary"
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              {titleItems2}
              <Manager>
                <Target>
                  <div
                    ref={node => {
                      this.target1 = node
                    }}
                  >
                    <Chip
                      avatar={
                        <Avatar
                          src={restUrl + `uploads/${this.state.imageFileName}`}
                        />
                      }
                      label={this.state.shimei}
                      className={classes.chip}
                      aria-label="More"
                      aria-haspopup="true"
                      onClick={this.handleToggle}
                      className={classNames(
                        !open && classes.buttonFrame,
                        open && classes.buttonFrame2
                      )}
                      style={{ fontSize: '100%' }}
                    />
                  </div>
                </Target>
                <Popper
                  placement="bottom-start"
                  eventsEnabled={open2}
                  className={classNames({ [classes.popperClose]: !open2 })}
                >
                  <Grow
                    in={open2}
                    id="menu-list-grow"
                    style={{ transformOrigin: '0 0 0' }}
                  >
                    <Paper>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={this.handleLogoutClick}
                          component={loginLink}
                        >
                          Logout
                        </MenuItem>
                      </MenuList>
                    </Paper>
                  </Grow>
                </Popper>
              </Manager>
            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}
          >
            <div className={classes.drawerHeader} />
            {/* 下のdivの中身を画面に応じて変えること。ヘッダ部分は共通のため、触らないこと。 */}
            <div>
              <font size="5">商品検索</font>
              <div align="right">
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                >
                  検索
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  className={classes.button}
                >
                  クリア
                </Button>
              </div>
              <div />
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="shohinmei"
                  label="商品名"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                />
                <TextField
                  id="amount"
                  select
                  label="金額"
                  className={classes.textField}
                  value={this.state.currency}
                  onChange={this.handleChange('currency')}
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  margin="normal"
                >
                  {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </form>
              <br />
              <div>
                <font size="5">検索結果</font>
              </div>
              <Paper className={classes.root}>
                <div align="right">
                  <Button
                    variant="fab"
                    mini
                    color="primary"
                    aria-label="Add"
                    className={classes.button}
                  >
                    <AddIcon />
                  </Button>
                  <Button
                    variant="fab"
                    mini
                    color="secondary"
                    aria-label="Edit"
                    className={classes.button}
                  >
                    <Icon>edit_icon</Icon>
                  </Button>

                  <Button
                    variant="fab"
                    mini
                    aria-label="Delete"
                    className={classes.button}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <font size="3">商品名</font>
                      </TableCell>
                      <TableCell>
                        <font size="3">金額</font>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => {
                      return (
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            <TextField
                              id="shohinmei"
                              defaultValue={row.name}
                              className={classes.textField}
                              margin="normal"
                            />
                          </TableCell>
                          <TableCell numeric>
                            <TextField
                              id="price"
                              defaultValue={row.price}
                              className={classes.textField2}
                              margin="normal"
                              inputProps={{
                                style: {
                                  textAlign: 'right'
                                }
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </div>
            <div align="right">
              <Button
                variant="outlined"
                size="small"
                className={classes.button}
              >
                確定
              </Button>
            </div>
          </main>
          {after}
        </div>
      </div>
    )
  }
}

ComShohinMenteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(ComShohinMenteForm)
