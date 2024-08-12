import React, { Component } from 'react'
import './main.css'
import welimg from './willnarongpostv2.png'
import Footer from './footer'
import $ from 'jquery'
import logo from './logo.svg'

// import Home from './Home'

export default class App extends Component {
  componentDidMount() {
    $(document).on('scroll', function () {
      if ($("#navbarscroll").offset().top < 100) {
        $("#navbarscroll").removeClass("animate__fadeOut")
        $("#navbarscroll").addClass("animate__fadeIn")
      } else {
        $("#navbarscroll").removeClass("animate__fadeIn")
        $("#navbarscroll").addClass("animate__fadeOut")
      }
    })
  }
  render() {
    return (
      <div>
        <nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light animate__animated animate__fadeOut animate__faster" id="navbarscroll">
          <div class="container-fluid">
            <a class="flex logowill navbar-brand" href="/Discover"><img src={logo} class="logoimg" alt="WiewShare" />&nbsp;WiewShare</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
              aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarID">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Welcome!</a>

              </div>
            </div>
          </div>
        </nav>
        <nav class="navbar navbar-expand-sm navbar-light bg-light" id="navbarscroll">
          <div class="container-fluid">
            <a class="flex logowill navbar-brand" href="/Discover"><img src={logo} class="logoimg" alt="WiewShare" />&nbsp;WiewShare</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
              aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarID">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">Welcome</a>

              </div>
            </div>
          </div>
        </nav>
        <div class="main">
          <div class="row">
            <div class="col-md-6 welcome p-4">
              <br />
              <h1 class="titletextlight rightalign">ต้องการเข้าร่วม WiewShare ไหม<br />มาเลยๆ!!</h1>
              <div class="card">
                <div class="container">
                  <br />
                  <h1>แบบฟอร์มสมัครเข้าร่วมโปรแกรม Beta</h1>
                  <p>*เนื่องจากทางเรายังไม่มีเงินสนับสนุนและฐานข้อมูลอาจไม่เพียงพอต่อผู้ใช้งาน ทางเราขอทำการจำกัดคนที่เหมาะสมสำหรับการเข้าใช้เท่านั้น เช่น เพื่อน ผู้เชี่ยวชาญ ฯลฯ - <a href="https://it-airwavy.ml" target="blank">เรียนรู้เพิ่มเติม</a></p>
                  <label>Sign Up</label><hr />
                  <button class="btn btn-primary">
                    สมัครเข้าใช้งาน
                    </button><br /><hr />
                  <label>Sign In</label><hr />
                  <form method="post" class="formsignup p-4">
                    <label><i class="bi bi-envelope"></i>&nbsp;
                      Email or <i class="bi bi-person-badge"></i>&nbsp;
                      Username</label>&nbsp;&nbsp;
                      <input class="username" type="username" />&nbsp;&nbsp;<br /><br />
                    <label><i class="bi bi-key"></i>&nbsp;Password</label>&nbsp;&nbsp;
                      <input class="passworld" type="password" />&nbsp;&nbsp;<br /><br />
                    <input class="submit" type="submit" />
                  </form>
                </div>
                <br />
              </div>
            </div>
            <div class="col-md-6 signup p-4">
              <br />
              <h1 class="titletext">Want Wiew?<br />Join Now!</h1><br />
              <img src={welimg} class="welimg" alt="Welcome!" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
