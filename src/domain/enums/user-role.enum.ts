export enum Roles {
  ALUNO = 1,
  ESTAGIARIO = 2,
  TREINADOR = 3,
  DONO = 4,
}

export const getRoleValues = (): number[] => {
  return Object.values(Roles).filter(
    (value): value is number => typeof value === 'number',
  );
};

export type RoleType = Roles.ALUNO | Roles.ESTAGIARIO | Roles.TREINADOR | Roles.DONO;
