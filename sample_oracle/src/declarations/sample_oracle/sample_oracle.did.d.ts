import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type AssocList = [] | [[[string, number], List_1]];
export type AssocList_1 = [] | [[[string, AssocList], List_2]];
export type List = [] | [[[Principal, Role], List]];
export type List_1 = [] | [[[string, number], List_1]];
export type List_2 = [] | [[[string, AssocList], List_2]];
export type Role = { 'owner' : null } |
  { 'writer' : null };
export interface anon_class_8_1 {
  'assign_owner_role' : ActorMethod<[], undefined>,
  'assign_writer_role' : ActorMethod<[Principal], undefined>,
  'get_map' : ActorMethod<[], AssocList_1>,
  'get_map_field_value' : ActorMethod<[string, string], [] | [number]>,
  'get_map_value' : ActorMethod<[string], [] | [AssocList]>,
  'get_roles' : ActorMethod<[], List>,
  'my_role' : ActorMethod<[], [] | [Role]>,
  'revoke_writer_role' : ActorMethod<[Principal], undefined>,
  'self_destruct' : ActorMethod<[], undefined>,
  'update_map_value' : ActorMethod<[string, string, number], undefined>,
}
export interface _SERVICE extends anon_class_8_1 {}
