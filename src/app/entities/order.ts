export class Order {
  ordemID!: number;
  instalacao!: string;
  local!: string;
  equipamento!: string;
  funcionarioID!: string;
  tipoServicos!: string[];
  tipoManut!: string[];
  tipoTroca!: string[];
  fotosAntes!: string[];
  fotosDepois!: string[];
  dataFim!: number;
  pat!: string;
  obs!: string;
}
