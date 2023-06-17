import React from "react";
import "./Home.css";
import Button from "../../components/Button";
import Footer from "../../components/footer/Footer";
import Table from "../../components/table/Table";
const Home = () => {
  var content = [
    {
      id: 1,
      img: "../../../assets/1.png",
      txt1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      txt2: "Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim, eiusmod tempor incididunt ut labore",
    },
    {
      id: 2,
      img: "../../../assets/2.png",
      txt1: "Sed do eiusmod tempor incididunt ut labore ",
      txt2: "Convallis a cras semper auctor neque. Fringilla est ullamcorper eget nulla facilisi etiam dignissim elit duis tristique solicitudin vel",
    },
    {
      id: 3,
      img: "../../../assets/3.png",
      txt1: "Quis autem vel eum iure reprehenderit qui in ea voluptate",
      txt2: "Look no further for seamless multi-channel attribution. Our process is complete and customizatible, allowing you to view your",
    },
  ];

  return (
    <>
      <div className="container">
        <section className=" gap-below">
          <div className="row">
            <div className=" col-md-6 left">
              <div className="">
                <p className="homeTxt">
                  Lore <span>ipsum.</span>
                  Dolor <span>sit.</span>
                </p>

                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis
                  unde omnis iste natus error.
                </p>
                <div className="btn-flex">
                  <Button title="Viverra orci sagittis" />
                  <Button
                    img="../../../assets/playIcon.png"
                    title="Get a demo"
                  />
                  {/* <Button title="Login" />
                  <Button title="Get Started" /> */}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <img
                style={{ objectFit: "cover", marginLeft: "8rem" }}
                src="../../../assets/homeimg.png"
                className="h-100 w-100"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <section className="second-sec gap-below">
          <p className="title">
            Ut enim ad minima veniam, quis nostrum <br /> exercitationem ullam
            corporis suscipit
          </p>

          <div>
            <Table />
          </div>
        </section>

        {/* ------------social media ---- */}

        <section className="img-grid container-md">
          <div className="left">
            <p className="title-left">
              Sed ut perspiciatis unde omnis iste natus error. Try out!
            </p>
            <p style={{ fontSize: "24px", fontWeight: "400" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore ullamco esse cillium
            </p>
            <Button title="Try Out Now!" />
          </div>

          <div className="img-flex-div ">
            <div className="img-flex">
              <div>
                <img
                  src="../../../assets/social-icon/triangle.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>

              <div>
                <img
                  src="../../../assets/social-icon/fb.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>

              <div>
                <img
                  src="../../../assets/social-icon/shop.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>
            </div>

            <div className="img-flex div-mid">
              <div>
                <img
                  src="../../../assets/social-icon/tiktok.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>
              <div>
                <img
                  src="../../../assets/social-icon/pintrest.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>
              <div>
                <img
                  src="../../../assets/social-icon/twitter.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>
            </div>

            <div className="img-flex">
              <div>
                <img
                  src="../../../assets//social-icon/snapchat.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>
              <div>
                <img
                  src="../../../assets//social-icon/blue.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>

              <div>
                <img
                  src="../../../assets//social-icon/orange.png"
                  alt=""
                  width="71.94px"
                  height="71.94px"
                />
              </div>
            </div>
          </div>
        </section>
        {/* -----------social media ------- */}

        <section className="gap-below mt-5">
          <div className="cont">
            {content.map((item, index) => {
              return (
                <div className="three-div container" key={index}>
                  <div className="div-text col">
                    <img
                      style={{
                        height: "63px",
                        width: "63px",
                        marginBottom: "20px",
                        objectFit: "contain",
                      }}
                      src={item.img}
                      alt=""
                    />
                    <p style={{ fontSize: "22px", fontWeight: "600" }}>
                      {item.txt1}
                    </p>
                    <p>{item.txt2}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="third-sec gap-below">
          <div className="left">
            <p className="title-left">Nemo enim ipsam quia </p>
            <p style={{ fontSize: "24px", fontWeight: "400" }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu nemo enim
            </p>

            <div className="column-flex">
              <div className="row-flex">
                <img
                  style={{ height: "30px", width: "30px" }}
                  src="../../../assets/playbtn.png"
                  alt=""
                />
                <p style={{ marginLeft: "15px", marginTop: "2px" }}>
                  Sed ut perspiciatis unde
                </p>
              </div>

              <div className="row-flex">
                <img
                  style={{ height: "30px", width: "30px" }}
                  src="../../../assets/playbtn.png"
                  alt=""
                />
                <p style={{ marginLeft: "15px", marginTop: "2px" }}>
                  Sed ut perspiciatis unde
                </p>
              </div>

              <div className="row-flex">
                <img
                  style={{ height: "30px", width: "30px" }}
                  src="../../../assets/playbtn.png"
                  alt=""
                />
                <p style={{ marginLeft: "15px", marginTop: "2px" }}>
                  Error sit voluptatem
                </p>
              </div>

              <div className="row-flex">
                <img
                  style={{ height: "30px", width: "30px" }}
                  src="../../../assets/playbtn.png"
                  alt=""
                />
                <p style={{ marginLeft: "15px", marginTop: "2px" }}>
                  Accusantium doloremque
                </p>
              </div>
            </div>

            <Button type="two" title="Try Out Now!" />
          </div>

          <div>
            <img
              className="img-fluid"
              style={{
                height: "100vh",
                width: "100vw",
                objectFit: "contain",
                // marginTop: "14rem",
              }}
              src="../../../assets/grp1.png"
              alt=""
            />
          </div>
        </section>

        <section className="fourt-sec gap-below">
          <p className="title">
            Lorem Ipsum is simply dummy text of <br /> the printing and
            typesetting
          </p>
          <p style={{ fontSize: "24", fontWeight: "400", textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore{" "}
          </p>

          <div>
            <img
              style={{ objectFit: "contain" }}
              className="h-100 w-100"
              src="../../../assets/grp2.png"
              alt=""
            />
          </div>
          <div className="table-row">
            <img src="../../../assets/table2.png" alt="" />
            <img src="../../../assets/table3.png" alt="" />
          </div>
        </section>

        <section className="custom d-flex justify-content-between gap-below">
          <div>
            <p className="title-left">Consectetur adipiscing elit</p>
            <p style={{ fontSize: "24px", fontWeight: "400" }}>
              Convallis a cras semper auctor neque. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim viverra
            </p>
          </div>

          <div>
            <img
              style={{
                height: "259.35px",
                width: "185.45px",
                objectFit: "contain",
              }}
              src="../../../assets/ftouch.png"
              alt=""
            />
          </div>
          <div>
            <img
              style={{
                height: "259.35px",
                width: "185.45px",
                objectFit: "contain",
              }}
              src="../../../assets/ltouch.png"
              alt=""
            />
          </div>

          <div>
            <img
              style={{
                height: "202px",
                width: "190.65px",
                objectFit: "contain",
              }}
              src="../../../assets/custom.png"
              alt=""
            />
          </div>
        </section>

        <section className="fifth-sec">
          <p className="title">
            Ullamcorper morbi tincidunt ornare massa eget.
            <br /> Quam viverra orci sagittis eu volutpat odio
          </p>
          <p
            style={{ fontSize: "24px", fontWeight: "400", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore{" "}
          </p>

          <div
            className="smedia mb-5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="smedia-div">
              <div class="centered-element">
                <img src="../../../assets/social-icon/fb.png" alt="" />
              </div>

              {/* <div>
                <img src="../../../assets/social-icon/fb.png" alt="" />
              </div> */}
            </div>
            <div className="smedia-col">
              <div className="smedia-div">
                <div className="centered-element">
                  <img src="../../../assets/social-icon/triangle.png" alt="" />
                </div>
              </div>
              <div className="smedia-div">
                <div className="centered-element">
                  <img src="../../../assets/social-icon/tiktok.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <img
            style={{ width: "100%", objectFit: "contain" }}
            src="../../../assets/table1.png"
            alt=""
          /> */}
          <Table />
        </section>

        <section className="last-sec">
          <div>
            <p className="title-left">
              Ullamcorper morbi tincidunt ornare
              <br /> massa eget
            </p>
            <p style={{ fontSize: "24px", fontWeight: "400" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              <br /> tempor incididunt ut labore{" "}
            </p>
          </div>

          <div>
            <Button title="Apply" />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
