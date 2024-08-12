import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div>
                <div class="footer">
                    <div class="container">
                        <br/><br/>
                        <div class="row formsignup p-4">
                            <div class="col-sm-4">
                                <h3>เกี่ยวกับเว็บไซด์ของเรา!</h3>
                                <p> เป็นเว็บ Application ที่ไว้ Share ประสบการณ์ของแต่ละคนในนี้ เป็นพื้นที่ ที่มาแชร์ประสบการณ์ทั้งหลายๆ ด้าน!!<br/><br/>
                                    
                                    เริ่มพัฒนาเวอร์ชั่นแรกเมื่อ กรกฎาคม 2020 ให้ชื่อ ชื่อแรกกว่า "WaitMC Website" 
                                    ซึ่งเป็นเว็บที่สามารถพูดคุยกันเกี่ยวกับ Minecraft ได้ จากนั้นเราทำการพัฒนา เว็บโซเชียลมีเดียใหม่ใช้เวลาค้นหาตัว Engine ถึง 2 เดือน ผลปรากฎว่าไม่มีตัวไหนทีสามารถตอบโจทย์เราได้ จากนั้นเราได้ทำการ
                                    พัฒนาเว็บโซเชียลมีเดียซึ่งพัฒนามาจากภาษา <a href="https://php.net" target="blank">PHP</a> และตอนนี้ก็พัฒนาถึง Prototype V 3.1 Testing System จากนั้นก็มาพัฒนาเว็บไซด์ "WiewShare" ด้วยระบบ React และ Node.js
                                    จนถึงปัจจุบันนี้!
                                    </p>
                            </div>

                            <div class="col-sm-4">
                                <h3>ผลตอบรับสู่เรา!</h3>
                                <p>-</p>
                            </div>

                            <div class="col-sm-4">
                                <h3>ติดตาม Social Network ของเรา!</h3>
                                <a href="https://youtube.com/c/AirwavyIT" Style="color: red;"><i class="bi bi-youtube"></i>&nbsp;Airwavy!!</a><br/>
                                <a href="https://www.joinclubhouse.com/@airwavy" Style="color: grey;">👋 @Airwavy</a><br/>
                                <a href="https://www.facebook.com/Airwavy" Style="color: blue;"><i class="bi bi-facebook"></i>&nbsp;Airwavy - นอกเรื่อง Talk</a><br/>
                                <a href="https://twitter.com/AirwavyIT" Style="color: #00aeff;"><i class="bi bi-twitter"></i>&nbsp;Airwavy!!</a><br/>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>
                <div class="footer2">
                    <br/>
                    <center>
                        <h4>© 2021 Copyright by Willnarong Dev insight Airwavy Dev</h4>
                        <br/>
                        <a href="https://it-airwavy.ml/"><i class="bi bi-cloud-fog"></i>&nbsp;It Airwavy (Development) Website</a>
                        <br/>
                        {/* <a href="https://it-airwavy.ml/"><i class="bi bi-cloud-fog"></i>&nbsp;Policy</a>
                        <br/>
                        <a href="https://it-airwavy.ml/"><i class="bi bi-cloud-fog"></i>&nbsp;Privacy Guildline</a>
                        <br/>
                        <a href="https://it-airwavy.ml/"><i class="bi bi-cloud-fog"></i>&nbsp;Community Guildline</a> */}
                    </center>
                    <br/>
                </div>
            </div>
        )
    }
}
