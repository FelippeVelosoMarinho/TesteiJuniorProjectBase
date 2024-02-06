import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import GlobalStyle from "../../styles/GlobalStyle";
import { theme } from '../../styles/theme';
interface ModalTwoButtonsType3Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

import Box from "../Box";
import Button from "../Button";
import Input from "../Input";
import Spacer from "../Spacer";
import Text from "../Text";

import {
  BottomContainerInModal,
  CenterHorizontalContainer,
  LineHorizontal,
  MainContainerInModal,
  MainContainerModal,
  TopContainerInModal,
} from "../../utils/Containers/Containers";

export var ModalTwoButtonsType3Input1Value: string = "";
export var ModalTwoButtonsType3Input2Value: string = "";

function ModalTwoButtonsType3({
  showModal,
  setShowModal,
}: ModalTwoButtonsType3Props) {
  const [input1Value, setInput1Value] = useState(""); // First input
  const [input2Value, setInput2Value] = useState(""); // Second input

  const HandleInput1Value = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput1Value(e.target.value); // First input
  const HandleInput2Value = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput2Value(e.target.value); // Second input

  const ModalRef = useRef<HTMLHeadingElement>(null);

  const CloseModalOnOutsideClick = (e: any) =>  ModalRef.current === e.target ? setShowModal(false) : null;

  return (
    <>
      {showModal ? (
        <MainContainerModal ref={ModalRef} onClick={(e) => CloseModalOnOutsideClick(e)}>
          <GlobalStyle />
          <Box size="modalSizeType3" rounded backgroundColor="white">
            <CenterHorizontalContainer>
              <TopContainerInModal>
                <Text variant="body1" bold="true" color="primary">
                  Adicionar coluna
                </Text>
                <AiOutlineClose
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                  color={theme.colors.grey}
                  onClick={() => setShowModal(false)}
                />
              </TopContainerInModal>
              <LineHorizontal />
              <MainContainerInModal type="3">
                <Input
                  size="sm"
                  type="text"
                  placeholder="Insira o nome da coluna a ser adicionada."
                  onChange={(e) => HandleInput1Value(e)}
                />
                <Spacer vertical="10" />
                <Input
                  size="sm"
                  type="text"
                  placeholder="Insira o valor da coluna."
                  onChange={(e) => HandleInput2Value(e)}
                />
              </MainContainerInModal>
              <LineHorizontal />
              <BottomContainerInModal>
                <Button
                  size="xs"
                  color="primary"
                  bordered="true"
                  hover="true"
                  onClick={() => setShowModal(false)}
                >
                  <Text variant="body2" bold="true"> Sair </Text>
                </Button>
                <Spacer horizontal="12" />
                <Button
                  size="xs"
                  color="primary"
                  hover="true"
                  onClick={() => {
                    setShowModal(false);
                    ModalTwoButtonsType3Input1Value = input1Value;
                    ModalTwoButtonsType3Input2Value = input2Value;
                  }}
                >
                  <Text variant="body2" bold="true"> Confirmar </Text>
                </Button>
              </BottomContainerInModal>
            </CenterHorizontalContainer>
          </Box>
        </MainContainerModal>
      ) : null}
    </>
  );
}

export default ModalTwoButtonsType3;
