const NavbarComp = ({changeColor,colorChanged}) => {
  return(
  <nav className="navbar fixed-top navbar-expand-lg navbar-light m-auto" id="navbar" style={colorChanged ?  {'backgroundColor' : '#007AD5'} : {'' : ''}}>
      <a className="navbar-brand mr-auto" id="imaba" href="../index.html">iMaba</a>
      <button onClick={changeColor} className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                          <a className="nav-link"  href="../akademik.html">Akademik</a>
                      </li>
              <li className="nav-item">   
                  <a className="nav-link" href="../UI.html">Info Kampus</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active"  href="./fasilkom.html">Info Fasilkom</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="../Informasi.html">Kanal Informasi</a>
              </li>
          </ul>
      </div>
  </nav>
  );
}

const FirstRow = () => {
  return(
    <div className="container-fluid first-page px-5 fadein" id="first-page">
      <div className="row">
        <div className="col-md-5 mx-5 opening">
          <h1>INFO FASILKOM</h1>
          <p className="mt-3">
              
          </p>
        </div>
      </div>
    </div>
  );
}

class App extends React.Component{
  state={
    navBarColorChanged:false
  }
  changeColor = (e) => {
    this.setState({
      navBarColorChanged: !this.state.navBarColorChanged
    });
  }
  render(){
    return(
      <div>
        <NavbarComp changeColor={this.changeColor} colorChanged={this.state.navBarColorChanged} />
        <FirstRow />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
