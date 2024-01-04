import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { STYLE_ITEMS_KEY } from '../constants/queryKeys';
import { getStyleItems, addStyleItem, deleteStyleItem, updateStyleItem, getStyleItemsById } from '../api';
import { StyleItem } from '../@types';
import { useParams } from 'react-router-dom';

export const useStyleItems = () => {
  const queryClient = useQueryClient();

  // 조회
  const { data: styleItems, isLoading } = useQuery({ queryKey: [STYLE_ITEMS_KEY], queryFn: getStyleItems });

  // if (id) {
  //   const { data: selectedStyleItem } = useQuery({ queryKey: [STYLE_ITEMS_KEY, id], queryFn: () => getStyleItemsById(id) });

  //   return selectedStyleItem;
  // }

  const styleItemByIdMutation = useMutation({
    mutationFn: getStyleItemsById,
    onSuccess: () => {},
  });

  // 추가
  const addStyleItemMutation = useMutation({
    mutationFn: addStyleItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STYLE_ITEMS_KEY] });
    },
  });

  // 수정
  const updateStyleItemMutation = useMutation({
    mutationFn: updateStyleItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STYLE_ITEMS_KEY] });
    },
  });

  // 삭제
  const deleteStyleItemMutation = useMutation({
    mutationFn: deleteStyleItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STYLE_ITEMS_KEY] });
    },
  });

  return { styleItems, isLoading, testItem: styleItemByIdMutation, addStyleItem: addStyleItemMutation.mutate, deleteStyleItem: deleteStyleItemMutation.mutate, updateStyleItem: updateStyleItemMutation.mutate };
};
