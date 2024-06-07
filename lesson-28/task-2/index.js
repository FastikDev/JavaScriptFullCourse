'use strict';

export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNodes => markFavorites(childNodes, favorites)),
  };
};