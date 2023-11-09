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
  height:2.2vw;
  width:17.53vw;
  border-radius:36px;
  border:2px solid #BFC5D0;
  background: #16162A;
  color: #e4e8ef;
  padding:0.3vw;
  font-size: 0.9vw;
`;

const StyledOption = styled.option`
  
  background-color: ${color.white};
  padding: 1vw; 


`;



const Upload = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedFile, setSelectedFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const fileInputRef = useRef(null);

  const GenreList=[
    {value:"hiphop",name:"힙합"},
    {value:"blues",name:"블루스"},
    {value:"classic",name:"클래식"},
    {value:"folk",name:"포크"},
    {value:"pop",name:"팝"},
    {value:"jazz",name:"재즈"},
    {value:"indie",name:"인디"},
    {value:"r&b",name:"R&B"},
    {value:"rock",name:"락"},
  ];

  const [genre, setGenre] = useState("");


  const InstrumentList=[
    {value:"acoustic",name:"어쿠스틱 기타"},
    {value:"base",name:"베이스"},
    {value:"drum",name:"드럼"},
    {value:"violin",name:"바이올린"},
    {value:"piano",name:"피아노"},
    {value:"etc",name:"etc"},
  ]

  const [instrument, setInstrument] = useState("");

  const MoodList =[
    {value:"sad",name:"우울한"},
    {value:"exciting",name:"신나는"},
    {value:"cheerful",name:"쾌활한"},
    {value:"peaceful",name:"평화로운"},
    {value:"serious",name:"심각한"},
    {value:"urgent",name:"급박한"},
    {value:"joyful",name:"즐거운"},
    {value:"funny",name:"웃긴"},
  ]

  const [mood, setMood] = useState("");

  const LengthList=[
    {value:"short",name:"1분 이내"},
    {value:"medium",name:"1-5분"},
    {value:"long",name:"5분이상"},
  ]

  const [length, setLength] = useState("");

  
  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  
const [formData, setFormData] = useState({
  title: "",
  genre: "",
  instrument: "",
  mood: "",
  length: "",
  description: "",
  selectedButton: null,
  selectedFile: null
});





const handleSubmit = async () => {
 
  if (!isFormValid()) {
    alert("모든 칸을 입력해주세요.");
    return;
  }

  const formDataArray = [
    title,
    selectedFile,
    genre,
    instrument,
    mood,
    length,
    description,
    selectedButton
  ];

 
  console.log("Form Data Array:", formDataArray);

 
  const uploadFormData = new FormData();
  uploadFormData.append("title", formData.title);
  uploadFormData.append("description", formData.description);
  uploadFormData.append("type", formData.selectedButton);
  uploadFormData.append("genre", formData.genre);
  uploadFormData.append("instrument", formData.instrument);
  uploadFormData.append("mood", formData.mood);
  uploadFormData.append("length", formData.length);
  uploadFormData.append("file", formData.selectedFile);

  try {
    const response = await fetch("/your-backend-endpoint", {
      method: "POST",
      body: uploadFormData
    });

    if (response.ok) {
   
      alert("업로드가 완료되었습니다.");
    } else {
    
      alert("업로드 중 문제가 발생했습니다.");
    }
  } catch (error) {
    
    console.error("업로드 중 문제 발생:", error);
    alert("업로드 중 문제가 발생했습니다. 나중에 다시 시도해주세요.");
  }
};



  const isFormValid = () => {
    return (
      title.trim() !== "" &&
      selectedFile &&
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
            >
              <StyledOption value="">유형을 선택해주세요</StyledOption>
            {GenreList.map((item)=>{
              return <StyledOption value={item.value} key={item.value}>
                {item.name}
              </StyledOption> })}
            </StyledSelect>
          </InputP>

          <InputP>
            <UploadP>Instrument *</UploadP>
            <StyledSelect
              value={instrument}
              onChange={(e) => setInstrument(e.target.value)}
            >
             <StyledOption value="">유형을 선택해주세요</StyledOption>
            {InstrumentList.map((item)=>{
              return <StyledOption value={item.value} key={item.value}>
                {item.name}
              </StyledOption> })}
              </StyledSelect>
          </InputP>
        </InputContainer>

        <InputContainer>
          <InputP>
            <UploadP>Mood *</UploadP>
            <StyledSelect
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            >
             <StyledOption value="">유형을 선택해주세요</StyledOption>
            {MoodList.map((item)=>{
              return <StyledOption value={item.value} key={item.value}>
                {item.name}
              </StyledOption> })}
              </StyledSelect>
          </InputP>

          <InputP>
            <UploadP>Length *</UploadP>
            <StyledSelect
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
             <StyledOption value="">유형을 선택해주세요</StyledOption>
            {LengthList.map((item)=>{
              return <StyledOption value={item.value} key={item.value}>
                {item.name}
              </StyledOption> })}
              </StyledSelect>
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

