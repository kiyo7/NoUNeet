import React, { useEffect, useCallback } from 'react';
import { useCompanyAllGet } from '../../hooks/useCompanyAllGet';
import { useSelectCompany } from '../../hooks/useSelectCompany';
import styled from 'styled-components';

import { CompanyCards } from './CompanyCard';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export const MainPage = () => {
  const { getCompanys, loading, companys } = useCompanyAllGet();
  const { onSelectCompany, selectCompany } = useSelectCompany();

  useEffect(() => getCompanys(), []);

  const onClickCompany = useCallback(
    (id) => {
      onSelectCompany({ id, companys });
    },
    [companys, onSelectCompany]
  );

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <SContentsWrapper>
          {companys.map((company) => (
            <SNavItem key={company.id}>
              <CompanyCards
                image={company.image}
                name={company.name}
                onClick={onClickCompany}
              />
            </SNavItem>
          ))}
        </SContentsWrapper>
      )}
    </>
  );
};

const SContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
  justify-content: space-between;
  margin-top: 40px;
  padding: 4%;
  text-align: center;
`;

const SNavItem = styled.div`
  margin-bottom: 20px;
`;
