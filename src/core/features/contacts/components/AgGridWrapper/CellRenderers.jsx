/* eslint-disable
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions */
import React from 'react';
import missing from '../../avatar.png';
import { isUserDevice } from './device';
import './CellRenderers.scss';

export function CallSubmenuButtonRenderer(x) {
  const { node, data, context: { componentParent } } = x;
  const {
    chatContact, audioPlusEnabled, sendOTUInvitation, t,
  } = componentParent.props;

  const handleInviteClick = (e) => {
    e.stopPropagation();
    sendOTUInvitation(data.id);
  };

  const handleVideoClick = (e) => {
    e.stopPropagation();
    componentParent.onCallClick(data);
  };

  const handleAudioClick = (e) => {
    e.stopPropagation();
    componentParent.onCallClick({ ...data, audioOnly: true });
  };

  const handleMessageClick = (e) => {
    e.stopPropagation();
    componentParent.onChatClick(data);
  };

  if (!node) { return null; }

  return (
    <div className="buttons-container">
      <div className="ellipsis-menu-div">
        <i className="fa fa-ellipsis-v fa-lg" />
      </div>
      <div className="buttons-stripe">
        <div className="button btn-video" onClick={handleVideoClick}>
          <i className="fa fa-video" />
          <span className="icon-label">{t('Video')}</span>
        </div>
        { audioPlusEnabled
        && (
        <div className="button btn-audioplus" onClick={handleAudioClick}>
          <span className="audioPlusIcon" />
          <span className="icon-label audio-plus">{t('audio_plus_out_of_call')}</span>
        </div>
        )}
        { chatContact
        && (
        <div className="button message" onClick={handleMessageClick}>
          <i className="fa fa-comment-dots" />
          <span className="icon-label">{t('Message')}</span>
        </div>
        )}
        { sendOTUInvitation
        && (
        <div className="button invite-btn-container" onClick={handleInviteClick}>
          <i className="fa-solid fa-envelope" />
          <span className="icon-label">{t('Invite')}</span>
        </div>
        )}
      </div>
    </div>
  );
}

export function HlFavoriteIconRenderer(x) {
  const { data, value, context } = x;
  if (!data) { return null; }
  const iconClass = value ? 'fa fa-star favoriteIcon star-on' : 'fa fa-star favoriteIcon star-off';
  return (
    <div
      onClick={(e) => (
        context.componentParent.changeFavorite(e, data.id, !value, data)
      )}
      className="favorite-div"
    >
      <i className={iconClass} />
    </div>
  );
}

export function AvatarImageRenderer(x) {
  const { data, defaultAvatar } = x;
  const altText = data?.name || 'Avatar';
  if (!data) {
    return (
      <div style={{ fontSize: '40px' }}>
        <i className="fa fa-spinner fa-pulse fa-fw" />
      </div>
    );
  }
  const { color } = data;
  let style = {
    width: '40px',
    height: '40px',
    color,
    fontSize: '45px',
  };
  // default for users table
  const isDevice = isUserDevice(data);
  let avatarHtml = <img src={defaultAvatar || missing} alt={altText} style={{ width: '40px', borderRadius: '50%' }} />;
  if (isDevice) {
    avatarHtml = <i className="far fa-head-vr device" />;
  }
  // format default differently for groups/personas
  if ('user_count' in data) {
    avatarHtml = <i className="fa fa-circle" style={{ ...style }} />;
  }
  const url = data.avatar.url || data.avatar.thumb;
  if (url) {
    style = {
      ...style,
      border: `4px solid ${color}`,
      borderRadius: '50px',
    };
    // although, don't apply border if there is no color prop
    // colored borders should apply only to personas
    if (!data.color) {
      delete style.border;
    }
    avatarHtml = <img src={url} style={{ ...style }} alt={altText} />;
  }

  if (data.on_call_group || data.isGroup) {
    const bottom = '5px';
    const right = '20px';
    const groupHtml = (
      <span
        className="icomooni-icon-expert-group4"
        style={{
          align: 'right', verticalAlign: 'bottom', right, bottom, position: 'relative', fontSize: '18px',
        }}
      >
        <span className="path1" />
        <span className="path2" />
        <span className="path3" />
        <span className="path4" />
      </span>
    );
    avatarHtml = (
      <div>
        {avatarHtml}
        {' '}
        {groupHtml}
      </div>
    );
  }

  return <div className="AvatarImageRenderer">{avatarHtml}</div>;
}

function nonEmptyString(str) {
  return str && str.length > 0;
}

function NameDetails(data, showIfNotSignIn, t) {
  const {
    name, reachable, location, title,
  } = data;
  if (data) {
    const nameText = (reachable || !showIfNotSignIn) ? name : `${name} (${t('not_signed_in')})`;
    return (
      <div className="card">
        <div className="cardName" title={name}>{nameText}</div>
        { (nonEmptyString(title) || nonEmptyString(location)) && (
          <>
            <div className="text-muted cardSub" title={title}>{title}</div>
            <div className="text-muted cardSub" title={location}>{location}</div>
          </>
        )}
      </div>
    );
  }
  return null;
}

function GroupNameDetails(data) {
  const { name, description } = data;
  if (data) {
    return (
      <div className="group-card">
        <div className="cardName" title={name}>{name}</div>
        <div className="text-muted cardSub" title={description}>{description}</div>
      </div>
    );
  }
  return null;
}

export function NameDetailsRenderer({ data, colDef, context }) {
  const { t } = context.componentParent.props;
  if (data && data.on_call_group) {
    return GroupNameDetails(data);
  }
  return NameDetails(data, colDef.showIfNotSignIn, t);
}
