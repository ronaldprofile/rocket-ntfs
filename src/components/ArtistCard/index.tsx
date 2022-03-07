import { Container } from "./styles";

interface ArtistCardProps {
  avatar_image: string;
  username: string;
  total_photographs: string;
  isFeaturedArtist?: boolean;
}

export function ArtistCard({
  avatar_image,
  total_photographs,
  username,
  isFeaturedArtist
}: ArtistCardProps) {
  return (
    <Container isFeaturedArtist={isFeaturedArtist}>
      <div className="avatar">
        <img src={avatar_image} alt={username} />
      </div>

      <div className="user">
        <strong>{username}</strong>
        <span>{total_photographs} Fotografias</span>
      </div>
    </Container>
  );
}
