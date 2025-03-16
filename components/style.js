import { StyleSheet } from "react-native";
import { HeaderBar } from "./HeaderBar";
import { TextCarousel } from "./TextCarousel";

export default StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial",
    minWidth: "100%",
    minHeight: "100%",
    overflowY: "scroll",
  },
  contentBody: {
    borderStyle: "none",
    minWidth: "100%",
    minHeight: "90%",
    display: "flex",
    flexDirection: "column",
  },
  headerBar: {
    flex: 1,
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    flexDirection: "row",
    minWidth: "100%",
    minHeight: "max(10%, 6rem)",
    color: "#000000",
    backgroundColor: "#e6e8eb",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    paddingTop: ".25rem",
    flexGrow: "0",
    borderStyle: "none",
    borderBottomWidth: "1px",
    borderColor: "gray",
  },
  introCarousel: {
    marginTop: ".5rem",
    fontSize: "7rem",
    marginLeft: "1.5rem",
  },
  bigImpression: {
    fontSize: "9rem",
    marginTop: "3rem",
    marginBottom: "0px",
    lineHeight: "4.5rem",
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial",
    position: "relative",
    marginLeft: "1rem",
    fontWeight: "500",
  },
  scrollContainer: {
    position: "sticky",
    transition: "transform 0.5s ease-in-out",
    top: "0px",
  },
  scrollSpanUp: {
    position: "sticky",
    transition: "transform 0.5s ease-in-out",
    top: "0px",
  },
  scrollSpanDown: {
    position: "sticky",
    transition: "transform 0.5s ease-in-out",
    top: "0px",
  },
  flexColumn: {
    flex: 1,
    alignItems: "start",
    flexDirection: "column",
    overflow: "auto",
  },
  flexColumnFullWidth: {
    flex: 1,
    alignItems: "start",
    flexDirection: "column",
    overflowY: "auto",
    minWidth: "100%",
    maxWidth: "100%",
  },
  mainIntroLeftShift: {
    display: "relative",
    position: "absolute",
    marginLeft: "5%",
  },
  leftShiftMed: {
    marginLeft: "2rem",
  },
  leftShiftLarge: {
    marginLeft: "3rem",
  },
  highlightRed: {
    color: "red",
  },
  fixedWidthRightWrapper: {
    minHeight: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },
  rightLinks: {
    margin: ".1rem",
    paddingTop: ".5rem",
    paddingBottom: ".5rem",
    paddingLeft: "1.0rem",
    paddingRight: "1.0rem",
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "60px",
  },
  linkHovered: {
    color: "#007fee",
    backgroundColor: "white",
  },
  leftLinks: {
    paddingTop: ".25rem",
    paddingBottom: ".25rem",
    paddingLeft: "1.0rem",
    paddingRight: "1.0rem",
    textAlign: "center",
    fontSize: "2.0rem",
    display: "flex",
  },
  leftLinksHovered: {
    color: "#007fee",
    borderRadius: "60px",
    backgroundColor: "white",
  },
  fixedWidthWrapper: {
    minWidth: "9rem",
    paddingLeft: "2px",
    paddingRight: "2px",
  },
  lrScrollFrameImage: {
    width: "14rem",
    height: "14rem",
    borderRadius: "50%",
  },
  lrScrollFrame: {
    display: "flex",
    flexDirection: "row",
    overflow: "scroll",
    minWidth: "4rem",
    minHeight: "4rem",
    maxHeight: "14rem",
    maxWidth: "14rem",
  },
  textCarousel: {
    overflow: "hidden",
    minWidth: "18rem",
  },
  textCarouselTransitionSlide: {
    textAlign: "left",
  },
  ImageGalleryGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
  ImageGalleryGridTileImage: {
    maxWidth: "400px",
    maxHeight: "400px",
    minWidth: "200px",
    minHeight: "200px",
  },
  fullsizedLogo: {
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%",
    borderWidth: "1px",
    borderStyle: "solid",
  },
  centeredText: {
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial",
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  headingMed: {
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial",
    fontSize: "2rem",
  },
});
