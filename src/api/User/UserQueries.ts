import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { USER_QUERY_KEY } from '../../constants/queryKeys';
import { addUser, deleteUser, getUsers, updateUser } from '..';

export const userQueries = () => {
  const queryClient = useQueryClient();

  // 조회
  const { data: users, isLoading } = useQuery({ queryKey: [USER_QUERY_KEY], queryFn: getUsers });

  // 추가
  const addUserMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
    },
  });

  // 수정
  const updateUserMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
    },
  });

  // 삭제
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
    },
  });

  return { users, isLoading, addUser: addUserMutation.mutate, deleteUser: deleteUserMutation.mutate, updateUser: updateUserMutation.mutate };
};
