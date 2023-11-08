import color from "../../styles/colors";
import styled from "styled-components";
import React, { useState, useRef } from "react";

const Home = styled.div`
  height: 52vw;
  width: 40%;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const UploadP = styled.p`
  margin-top: 2vw;
  color: ${color.white};
  font-size: 1.5vw;
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 1vw;
`;

const UploadInput = styled.input`
  height: 2.2vw;
  padding: 1vw;
  border-radius: 36px;
  border: 2px solid #bfc5d0;
  outline: none;
  color: #e4e8ef;
  font-size: 0.9vw;

  &::placeholder {
    color: #9da5b3;
    font-size: 0.9vw;
    opacity: 1;
  }
`;

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  width: 7.4vw;
  height: 2.5vw;
  padding: 0.5vw 1.2vw;
  background-color: ${color.mainDarkBlue};
  border-radius: 1.8vw;
  font-size: 1vw;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e4e8ef;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 2px solid #4a88ff;

  &:hover {
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  width: 5.5vw;
  height: 2.5vw;
  padding: 0.5vw 1.2vw;
  background-color: #4a88ff;
  border-radius: 1.8vw;
  font-size: 1vw;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e4e8ef;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 2px solid #4a88ff;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2vw;
  flex-direction: row;
  gap: 2vw;
`;

const InputContainer = styled.div`
  flex-direction: row;
  display: flex;
  gap: 5vw;
`;

const InputP = styled.div`
  flex-direction: column;
  display: flex;
`;

const HiddenFileInput = styled.input`
  display: none; // 파일 인풋을 숨깁니다.
`;

const SelectedButton = styled(SearchButton)`
  background-color: #4a88ff;
  border: 2px solid #4a88ff;
`;

const StyledSelect = styled.select`
  width: 17.53vw;
  height: 2.2vw;
  padding: 1vw;
  border-radius: 36px;
  border: 2px solid #bfc5d0;
  outline: none;
  background-color: ${color.mainDarkBlue};
  color: #FFFFFF; 
  font-size: 0.9vw;

`;

const StyledOption = styled.option`
  background-color: #f8f8f8;
  color: #e4e8ef;
  padding: 5px; 
`;



const Upload = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [instrument, setInstrument] = useState("");
  const [mood, setMood] = useState("");
  const [length, setLength] = useState("");
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    console.log("FormData Values:", formData);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    if (isFormValid()) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("genre", genre);
      formData.append("instrument", instrument);
      formData.append("mood", mood);
      formData.append("length", length);
      formData.append("description", description);
      formData.append("type", selectedButton);

      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      try {
        {
          /*post 요청*/
        }
        const response = await fetch("/music/upload/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          console.log("업로드 성공:", jsonResponse);
        } else {
          const errorResponse = await response.json();
          console.error("업로드 실패:", errorResponse);
          alert(`에러: ${errorResponse.message}`);
        }
      } catch (error) {
        console.error("업로드 중 문제 발생:", error);
        alert("업로드 중 문제가 발생했습니다. 나중에 다시 시도해주세요.");
      }
    } else {
      alert("모든 칸을 입력해주세요.");
    }
  };

  const isFormValid = () => {
    return (
      title.trim() !== "" &&
      selectedFile.trim() !== "" &&
      genre.trim() !== "" &&
      instrument.trim() !== "" &&
      mood.trim() !== "" &&
      length.trim() !== "" &&
      description.trim() !== "" &&
      selectedButton != null
    );
  };

  return (
    <Home>
      <HomeContainer>
        <UploadP>Record Title *</UploadP>
        <UploadInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="타이틀을 입력해주세요"
        />

        <UploadP>Upload File *</UploadP>
        <UploadContainer>
          <UploadInput
            value={selectedFile}
            placeholder="파일을 업로드 해주세요"
            readOnly
            style={{ width: "23.6vw" }}
            onChange={(e) => setSelectedFile(e.target.value)}
          />

          <HiddenFileInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />

          <SearchButton
            onClick={handleBrowseClick}
            style={{ marginLeft: "1vw", marginRight: "3vw" }}
          >
            Browse File
          </SearchButton>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </UploadContainer>

        <ButtonContainer>
          {" "}
          {/*버튼 둘중 하나 선택되었을 때 효과*/}
          {selectedButton === "effect" ? (
            <SelectedButton onClick={() => handleButtonClick("effect")}>
              효과음
            </SelectedButton>
          ) : (
            <SearchButton onClick={() => handleButtonClick("effect")}>
              효과음
            </SearchButton>
          )}
          {selectedButton === "background" ? (
            <SelectedButton onClick={() => handleButtonClick("background")}>
              배경음악
            </SelectedButton>
          ) : (
            <SearchButton onClick={() => handleButtonClick("background")}>
              배경음악
            </SearchButton>
          )}
        </ButtonContainer>

        <InputContainer>
          <InputP>
            <UploadP>Genre *</UploadP>
            <StyledSelect
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              defaultValue=""
            >
             <StyledOption value="" disabled={genre !== ''}>장르를 선택해주세요</StyledOption>
              <StyledOption value="힙합">힙합</StyledOption>
              <StyledOption value="블루스">블루스</StyledOption>
              <StyledOption value="클래식">클래식</StyledOption>
              <StyledOption value="포크">포크</StyledOption>
              <StyledOption value="팝">팝</StyledOption>
              <StyledOption value="재즈">재즈</StyledOption>
              <StyledOption value="인디">인디</StyledOption>
              <StyledOption value="R&B">R&B</StyledOption>
              <StyledOption value="락">락</StyledOption>
            </StyledSelect>
          </InputP>

          <InputP>
            <UploadP>Instrument *</UploadP>
            <UploadInput
              placeholder="유형을 선택해주세요"
              style={{ width: "17.53vw" }}
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
            />
          </InputP>
        </InputContainer>

        <InputContainer>
          <InputP>
            <UploadP>Mood *</UploadP>
            <UploadInput
              placeholder="유형을 선택해주세요"
              style={{ width: "17.53vw" }}
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            />
          </InputP>

          <InputP>
            <UploadP>Length *</UploadP>
            <UploadInput
              placeholder="유형을 선택해주세요"
              style={{ width: "17.53vw" }}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </InputP>
        </InputContainer>

        <UploadP>Add Description</UploadP>
        <UploadInput
          placeholder="설명을 입력해주세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </HomeContainer>
    </Home>
  );
};

export default Upload;
