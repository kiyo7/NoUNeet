import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";
import styled from "styled-components";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const ProfileMain = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <STitle>My Profile</STitle>
      <br />
      <br />
      <SProfile>
        <SProfileImage>
          <SImageList>プロフィール画像</SImageList>
          <SIcon>
            <AccountCircleIcon fontSize="large" />
          </SIcon>
          <SEdit>
            <SEditIcon>
              <EditIcon fontSize="large" />
            </SEditIcon>
          </SEdit>
        </SProfileImage>
        <br />
        <SProfileName>
          <SNameList>ユーザー名</SNameList>
          <SName>あいうえおあいう</SName>
          <SEdit>
            <SEditIcon>
              <EditIcon fontSize="large" />
            </SEditIcon>
          </SEdit>
        </SProfileName>
        <br />

        <SProfileJobs>
          <SJobList>職種</SJobList>
          <SJob>学生</SJob>
          {/* <SRadioBtn>
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label="学生"
                />
                <FormControlLabel
                  value="worker"
                  control={<Radio />}
                  label="社会人"
                />
                <FormControlLabel
                  value="noAnswer"
                  control={<Radio />}
                  label="回答しない"
                />
              </RadioGroup>
            </FormControl>
          </SRadioBtn> */}
          <SEdit>
            <SEditIcon>
              <EditIcon fontSize="large" />
            </SEditIcon>
          </SEdit>
        </SProfileJobs>
        <br />

        <SProfileIntroduction>
          <SIntroductionList>自己紹介</SIntroductionList>
          <SEdit>
            <SEditIcon>
              <EditIcon fontSize="large" />
            </SEditIcon>
          </SEdit>
        </SProfileIntroduction>
        <SIntroText>
          <SText>
            ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          </SText>
        </SIntroText>
      </SProfile>
    </>
  );
};

const SProfile = styled.div`
  width: 50%;
  margin-left: 23%;
`;

const STitle = styled.h1`
  text-align: center;
`;

const SEdit = styled.div`
  display: flex;
  align-items: center;
`;

const SEditIcon = styled.button`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
`;

const SProfileImage = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SImageList = styled.h2`
  width: 28%;
  text-align: right;
`;

const SIcon = styled.div`
  display: flex;
  align-items: center;
`;

const SProfileName = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SNameList = styled.h2`
  width: 28%;
  text-align: right;
`;

const SName = styled.h2`
  display: flex;
  align-items: center;
`;

const SProfileJobs = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const SRadioBtn = styled.div`
//   display: flex;
//   align-items: center;
// `;

const SJobList = styled.h2`
  width: 28%;
  text-align: right;
`;

const SJob = styled.h2`
  display: flex;
  align-items: center;
`;

const SProfileIntroduction = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SIntroductionList = styled.h2`
  width: 28%;
  text-align: right;
`;

const SIntroText = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
`;

const SText = styled.p`
  padding: 1%;
`;

export default ProfileMain;
