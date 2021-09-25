import { useCallback, useState } from 'react';

export const useSelectCompany = () => {
  const [selectCompany, setSelectCompany] = useState(null);

  const onSelectCompany = useCallback((props) => {
    const { id, companys, onOpen } = props;
    const targetCompany = companys.find((company) => company.id === id);
    setSelectCompany(targetCompany);
    onOpen();
  }, []);
  return { onSelectCompany, selectCompany };
};
