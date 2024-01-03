import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { STYLE_ITEMS_KEY } from '../constants/queryKeys';
import { getStyleItems, addStyleItem, deleteStyleItem, updateStyleItem } from '../api';

export const useStyleItems = () => {
  const queryClient = useQueryClient();

  // 조회
  const { data: styleItems, isLoading } = useQuery({ queryKey: STYLE_ITEMS_KEY, queryFn: getStyleItems });

  // 추가
  const addStyleItemMutation = useMutation({
    mutationFn: addStyleItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STYLE_ITEMS_KEY });
    },
  });

  // 수정
  const updateStyleItemMutation = useMutation({
    mutationFn: updateStyleItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STYLE_ITEMS_KEY });
    },
  });

  // 삭제
  const deleteStyleItemMutation = useMutation({
    mutationFn: deleteStyleItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: STYLE_ITEMS_KEY });
    },
  });

  return { styleItems, isLoading, addStyleItem: addStyleItemMutation.mutate, deleteStyleItem: deleteStyleItemMutation.mutate, updateStyleItem: updateStyleItemMutation.mutate };
};
