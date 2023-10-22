import styled from 'styled-components';

export const GalleryItem = styled.li`
  position: relative;
  overflow: hidden;

  max-width: 400px;

  padding: 12px;

  border-radius: 18px;

  background: #7c7d3a;
  border: 1px solid #7c7d3a;

  transition: box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 1px 14px #7c7d3a;
    border: 1px solid #7c7d3a;
  }
`;
export const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border-radius: 12px;

  :hover {
    cursor: zoom-in;
  }
`;