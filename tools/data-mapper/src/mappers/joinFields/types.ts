export interface JoinGroup {
  newFieldName: string;
  format: string;
}

export interface JoinFieldsConfig {
  joinGroups: JoinGroup[];
}
