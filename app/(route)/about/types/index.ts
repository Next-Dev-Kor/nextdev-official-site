export interface CoreValueItem {
  id: string;
  title: string;
  description: string;
}

export interface CoreValueData {
  title: string;
  description: string;
  core_value: CoreValueItem[];
}

export interface Executive {
  position: string;
  name: string;
  university: string;
  team: string;
  message: string;
}

export interface ActivityRecords {
  member: number;
  project: number;
  study: number;
}
