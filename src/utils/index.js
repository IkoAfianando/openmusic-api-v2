const mapDBToAlbum = ({
    id,
    name,
    year,
    created_at,
    updated_at
}) => ({
    id,
    name,
    year,
    cratedAt: created_at,
    updatedAt: updated_at,
});

module.exports = {mapDBToAlbum};

