import styled from 'styled-components';

interface DialogProps {
  scrollTop: number;
}

export const Dialog = styled.div<DialogProps>`
  position: absolute;
  background: rgba(3, 23, 31, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 2;
  top: ${props => props.scrollTop}px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DialogCard = styled.div`
  background: white;
  width: 100%;
  max-width: 1024px;
  border-radius: ${props => props.theme.radius.standard};
  box-shadow: ${props => props.theme.shadows.standard};
`

export const DialogHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.richBlack};
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  justify-content: space-between;
`;

export const DialogBody = styled.div`
  padding: ${props => props.theme.spacing.xl};
  width: 100%;
`;

export const DialogFooter = styled.div`
  padding: ${props => props.theme.spacing.xl};
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.richBlack};
  display: flex;
  justify-content: flex-end;
`;

export const DialogTitle = styled.p`
  font-weight: ${props => props.theme.fontStyles.bold};
  color: ${props => props.theme.colors.richBlack};
  font-size: ${props => props.theme.fontSizes.xl};
`;

export const DialogInputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DialogInput = styled.input`
  width: 48%;
  border: 1px solid ${props => props.theme.colors.richBlack};
  border-radius: ${props => props.theme.radius.standard};
  padding: ${props => props.theme.spacing.standard};
`;

export const DialogTextarea = styled.textarea`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.richBlack};
  border-radius: ${props => props.theme.radius.standard};
  padding: ${props => props.theme.spacing.standard};
  margin-top: ${props => props.theme.spacing.standard};
`;

export const DialogConfirmButton = styled.button`
  border: 0;
  background: ${props => props.theme.colors.blueMunsell};
  border-radius: ${props => props.theme.radius.standard};
  padding: ${props => props.theme.spacing.standard};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontStyles.bold};
  font-size: ${props => props.theme.fontSizes.l};
  cursor: pointer;
`

export const DialogCancelButton = styled.button`
  border: 1px solid ${props => props.theme.colors.blueMunsell};
  background: transparent;
  border-radius: ${props => props.theme.radius.standard};
  padding: ${props => props.theme.spacing.standard};
  color: ${props => props.theme.colors.blueMunsell};
  font-weight: ${props => props.theme.fontStyles.light};
  font-size: ${props => props.theme.fontSizes.l};
  margin-right: ${props => props.theme.spacing.standard};
  cursor: pointer;
`;

export const DialogXButton = styled.button`
  width: 20px;
  background: transparent;
  border: 0;
  padding: ${props => props.theme.spacing.standard};
  color: ${props => props.theme.colors.richBlack};
  font-weight: ${props => props.theme.fontStyles.bold};
  font-size: ${props => props.theme.fontSizes.xl};
  cursor: pointer;
`;
