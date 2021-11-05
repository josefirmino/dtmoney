import * as S from "./styles";

import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <S.Section>
      <Summary />
      <TransactionsTable />
    </S.Section>
  );
}
