import React from "react";
import Frame145 from "../Frame145";
import AntDesignplayCircleOutlined22 from "../AntDesignplayCircleOutlined22";
import Frame1628 from "../Frame1628";
import Button22 from "../Button22";
import Group2122 from "../Group2122";
import "./Frame1657.css";

function Frame1657(props) {
  const {
    title,
    overlapGroup,
    latestVideos,
    text4,
    address,
    text3,
    frame145Props,
    antDesignplayCircleOutlined22Props,
    frame1628Props,
    frame16282Props,
    frame16283Props,
    frame16284Props,
    button22Props,
    group2122Props,
  } = props;

  return (
    <div className="frame-1657">
      <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
      <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{title}</h1>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="rectangle-77"></div>
        <div className="frame-1626">
          <div className="latest-videos valign-text-middle typographybodytiny-10-regular">{latestVideos}</div>
          <p className="text-4 valign-text-middle overpass-bold-white-16px">{text4}</p>
          <p className="address valign-text-middle typographybodytiny-10-regular">{address}</p>
        </div>
        <AntDesignplayCircleOutlined22 overlapGroup1={antDesignplayCircleOutlined22Props.overlapGroup1} />
      </div>
      <p className="text-3 typography-body-smalltext-14-regular">{text3}</p>
      <div className="frame-1627">
        <Frame1628
          youtubeCard2Props={frame1628Props.youtubeCard2Props}
          youtubeCard22Props={frame1628Props.youtubeCard22Props}
        />
        <Frame1628
          className={frame16282Props.className}
          youtubeCard2Props={frame16282Props.youtubeCard2Props}
          youtubeCard22Props={frame16282Props.youtubeCard22Props}
        />
        <Frame1628
          className={frame16283Props.className}
          youtubeCard2Props={frame16283Props.youtubeCard2Props}
          youtubeCard22Props={frame16283Props.youtubeCard22Props}
        />
        <Frame1628
          className={frame16284Props.className}
          youtubeCard2Props={frame16284Props.youtubeCard2Props}
          youtubeCard22Props={frame16284Props.youtubeCard22Props}
        />
        <Button22>{button22Props.children}</Button22>
      </div>
      <Group2122
        group862Props={group2122Props.group862Props}
        group872Props={group2122Props.group872Props}
        group322Props={group2122Props.group322Props}
        frame5Props={group2122Props.frame5Props}
      />
    </div>
  );
}

export default Frame1657;
