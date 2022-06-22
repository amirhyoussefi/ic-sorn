export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  const List_1 = IDL.Rec();
  const List_2 = IDL.Rec();
  List_1.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(IDL.Text, IDL.Float64), List_1)));
  const AssocList = IDL.Opt(
    IDL.Tuple(IDL.Tuple(IDL.Text, IDL.Float64), List_1)
  );
  List_2.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(IDL.Text, AssocList), List_2)));
  const AssocList_1 = IDL.Opt(
    IDL.Tuple(IDL.Tuple(IDL.Text, AssocList), List_2)
  );
  const Role = IDL.Variant({ 'owner' : IDL.Null, 'writer' : IDL.Null });
  List.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(IDL.Principal, Role), List)));
  const anon_class_8_1 = IDL.Service({
    'assign_owner_role' : IDL.Func([], [], []),
    'assign_writer_role' : IDL.Func([IDL.Principal], [], []),
    'get_map' : IDL.Func([], [AssocList_1], []),
    'get_map_field_value' : IDL.Func(
        [IDL.Text, IDL.Text],
        [IDL.Opt(IDL.Float64)],
        [],
      ),
    'get_map_value' : IDL.Func([IDL.Text], [IDL.Opt(AssocList)], []),
    'get_roles' : IDL.Func([], [List], []),
    'my_role' : IDL.Func([], [IDL.Opt(Role)], []),
    'revoke_writer_role' : IDL.Func([IDL.Principal], [], []),
    'self_destruct' : IDL.Func([], [], []),
    'update_map_value' : IDL.Func([IDL.Text, IDL.Text, IDL.Float64], [], []),
  });
  return anon_class_8_1;
};
export const init = ({ IDL }) => { return []; };
