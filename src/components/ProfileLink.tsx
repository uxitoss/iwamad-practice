type ProfileLinkProps = {
    label: string;
    url: string;
  };
  
  function ProfileLink({ label, url }: ProfileLinkProps) {
    return <a href={url}>{label}</a>;
  }
  
  export default ProfileLink;