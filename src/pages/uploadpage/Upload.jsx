import color from "../../styles/colors";
import styled from "styled-components";
import React, { useState, useRef } from "react";

const Home = styled.div`
  height: 58vw;
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
  display: none;
`;

const SelectedButton = styled(SearchButton)`
  background-color: #4a88ff;
  border: 2px solid #4a88ff;
`;

const StyledSelect = styled.select`
  height: 2.2vw;
  width: 17.53vw;
  border-radius: 36px;
  border: 2px solid #bfc5d0;
  background: #16162a;
  color: #e4e8ef;
  padding: 0.3vw;
  font-size: 0.9vw;
`;

const StyledOption = styled.option`
  background-color: ${color.white};
  padding: 1vw;
`;

const Upload = () => {
  const [music_type, setMusicType] = useState("");
  const [music_file, setMusicFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [music_image, setMusicImage] = useState(null);

  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const GenreList = [
    { value: "hiphop", name: "힙합" },
    { value: "blues", name: "블루스" },
    { value: "classic", name: "클래식" },
    { value: "folk", name: "포크" },
    { value: "pop", name: "팝" },
    { value: "jazz", name: "재즈" },
    { value: "indie", name: "인디" },
    { value: "r&b", name: "R&B" },
    { value: "rock", name: "락" },
  ];

  const [genre, setGenre] = useState("");

  const InstrumentList = [
    { value: "acoustic", name: "어쿠스틱 기타" },
    { value: "base", name: "베이스" },
    { value: "drum", name: "드럼" },
    { value: "violin", name: "바이올린" },
    { value: "piano", name: "피아노" },
    { value: "etc", name: "etc" },
  ];

  const [instruments, setInstruments] = useState("");

  const MoodList = [
    { value: "sad", name: "우울한" },
    { value: "exciting", name: "신나는" },
    { value: "cheerful", name: "쾌활한" },
    { value: "peaceful", name: "평화로운" },
    { value: "serious", name: "심각한" },
    { value: "urgent", name: "급박한" },
    { value: "joyful", name: "즐거운" },
    { value: "funny", name: "웃긴" },
  ];

  const [mood, setMood] = useState("");

  const LengthList = [
    { value: "short", name: "1분 이내" },
    { value: "medium", name: "1-5분" },
    { value: "long", name: "5분이상" },
  ];

  const [length, setLength] = useState("");

  const handleButtonClick = (type) => {
    setMusicType(type);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMusicFile(file);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMusicImage(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleBrowseImageClick = () => {
    imageInputRef.current.click();
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      alert("모든 칸을 입력해주세요.");
      return;
    }

    const formDataArray = [
      title,
      music_file,
      music_type,
      genre,
      instruments,
      mood,
      description,
      music_image,
    ];

    console.log("Form Data Array:", formDataArray);

    const uploadFormData = new FormData();
    uploadFormData.append("title", title);
    uploadFormData.append("music_file", music_file);
    uploadFormData.append("music_type", music_type);
    uploadFormData.append("genre", genre);
    uploadFormData.append("instruments", instruments);
    uploadFormData.append("mood", mood);
    uploadFormData.append("description", description);
    uploadFormData.append("music_image", music_image);

    try {
      const response = await fetch("http://127.0.0.1:8000/music/upload/", {
        method: "POST",
        body: uploadFormData,
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
      music_file &&
      music_image &&
      genre.trim() !== "" &&
      instruments.trim() !== "" &&
      mood.trim() !== "" &&
      description.trim() !== "" &&
      music_type !== "" &&
      length.trim() !== ""
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

        <UploadP>Upload Image *</UploadP>
        <UploadContainer>
          <UploadInput
            value={music_image ? music_image.name : ""}
            placeholder="이미지 파일을 업로드 해주세요"
            readOnly
            style={{ width: "23.2vw" }}
          />

          <HiddenFileInput
            type="file"
            ref={imageInputRef}
            onChange={handleImageChange}
          />

          <SearchButton
            onClick={handleBrowseImageClick}
            style={{ width: "8vw", marginLeft: "1vw", marginRight: "3vw" }}
          >
            Browse Image
          </SearchButton>
        </UploadContainer>

        <UploadP>Upload File *</UploadP>
        <UploadContainer>
          <UploadInput
            value={music_file ? music_file.name : ""}
            placeholder="파일을 업로드 해주세요"
            readOnly
            style={{ width: "23.6vw" }}
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
          {music_type === "effect" ? (
            <SelectedButton onClick={() => setMusicType("effect")}>
              효과음
            </SelectedButton>
          ) : (
            <SearchButton onClick={() => setMusicType("effect")}>
              효과음
            </SearchButton>
          )}
          {music_type === "background" ? (
            <SelectedButton onClick={() => setMusicType("background")}>
              배경음악
            </SelectedButton>
          ) : (
            <SearchButton onClick={() => setMusicType("background")}>
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
              {GenreList.map((item) => {
                return (
                  <StyledOption value={item.value} key={item.value}>
                    {item.name}
                  </StyledOption>
                );
              })}
            </StyledSelect>
          </InputP>

          <InputP>
            <UploadP>Instrument *</UploadP>
            <StyledSelect
              value={instruments}
              onChange={(e) => setInstruments(e.target.value)}
            >
              <StyledOption value="">유형을 선택해주세요</StyledOption>
              {InstrumentList.map((item) => {
                return (
                  <StyledOption value={item.value} key={item.value}>
                    {item.name}
                  </StyledOption>
                );
              })}
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
              {MoodList.map((item) => {
                return (
                  <StyledOption value={item.value} key={item.value}>
                    {item.name}
                  </StyledOption>
                );
              })}
            </StyledSelect>
          </InputP>

          <InputP>
            <UploadP>Length *</UploadP>
            <StyledSelect
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
              <StyledOption value="">유형을 선택해주세요</StyledOption>
              {LengthList.map((item) => {
                return (
                  <StyledOption value={item.value} key={item.value}>
                    {item.name}
                  </StyledOption>
                );
              })}
            </StyledSelect>
          </InputP>
        </InputContainer>

        <UploadP>Add Description *</UploadP>
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
