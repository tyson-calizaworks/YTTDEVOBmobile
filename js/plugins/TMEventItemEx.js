//=============================================================================
// TMPlugin - �A�C�e���I���g��
// �o�[�W����: 1.1.0
// �ŏI�X�V��: 2017/01/24
// �z�z��    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc �A�C�e���I���̏����Ƀw���v�E�B���h�E��ǉ����A
 * ���\���̗L���ƕ\���s�����A�C�e���^�C�v���Ƃɐݒ�ł��܂��B
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param helpWindowEnabledItem
 * @desc �A�C�e���I���Ńw���v�E�B���h�E��\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param helpWindowEnabledKey
 * @desc �厖�Ȃ��̑I���Ńw���v�E�B���h�E��\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param helpWindowEnabledA
 * @desc �B���A�C�e���`�I���Ńw���v�E�B���h�E��\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param helpWindowEnabledB
 * @desc �B���A�C�e���a�I���Ńw���v�E�B���h�E��\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param showItemNumberItem
 * @desc �A�C�e���̌���\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param showItemNumberKey
 * @desc �厖�Ȃ��̂̌���\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param showItemNumberA
 * @desc �B���A�C�e���`�̌���\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param showItemNumberB
 * @desc �B���A�C�e���`�̌���\�����邩�ǂ���
 * �����l: 1�i 0 �ŕ\�����Ȃ��j
 * @default 1
 *
 * @param numVisibleRowsItem
 * @desc �A�C�e���I���̕\���s��
 * �����l: 4
 * @default 4
 *
 * @param numVisibleRowsKey
 * @desc �厖�Ȃ��̑I���̕\���s��
 * �����l: 4
 * @default 4
 *
 * @param numVisibleRowsA
 * @desc �B���A�C�e���`�I���̕\���s��
 * �����l: 4
 * @default 4
 *
 * @param numVisibleRowsB
 * @desc �B���A�C�e���a�I���̕\���s��
 * �����l: 4
 * @default 4
 *
 * @param fixPlacement
 * @desc ���b�Z�[�W�E�B���h�E���Ȃ��ꍇ�̃E�B���h�E�ʒu
 * �����l: top ( top / bottom / ���ݒ�ŌŒ肵�Ȃ� )
 * @default top
 *
 * @help
 * TMPlugin - �A�C�e���I���g�� ver1.1.0
 *
 * �g����:
 *
 *   �A�C�e���^�C�v���ƂɈȉ��̐ݒ��ύX�ł��܂��B
 *   �E�w���v�E�B���h�E��\�����邩�ǂ���
 *   �E����\�����邩�ǂ���
 *   �E�A�C�e���I���E�B���h�E�̕\���s��
 * 
 *   �������^�O�ƃv���O�C���R�}���h���g���A���Ƃ��ĕ\������A�C�e����
 *   ����ɍׂ������ނ��邱�Ƃ��ł��܂��B
 *
 *   ���̃v���O�C���� RPG�c�N�[��MV Version 1.3.4 �œ���m�F�����Ă��܂��B
 * 
 * 
 * �������^�O�i�A�C�e���j:
 * 
 *   <subCategory:card>
 *     ���̃^�O�����Ă���A�C�e���ɃT�u�J�e�S���[�Ƃ��� card ��ݒ肵�܂��B 
 * 
 * 
 * �v���O�C���R�}���h:
 * 
 *   setEventItemSubCategory card
 *     �C�x���g�R�}���h�w�A�C�e���I���̏����x�̒��O�Ɏ��s���邱�ƂŁA
 *     �w�肵���T�u�J�e�S���[�̃A�C�e���݂̂�\�����邱�Ƃ��ł��܂��B
 *     ���Ƃ��΁A�C�x���g�R�}���h���� �厖�Ȃ��� ���I������Ă���ꍇ�A
 *     �������Ă���厖�Ȃ��̂̒�����T�u�J�e�S���[�� card ���ݒ肳��Ă���
 *     �A�C�e���݂̂�\�����܂��B
 * 
 *     ���̃R�}���h�̌��ʂ̓A�C�e���I�������i�܂��̓L�����Z���j����
 *     ���Z�b�g����܂��B
 */

var Imported = Imported || {};
Imported.TMEventItemEx = true;

var TMPlugin = TMPlugin || {};
TMPlugin.EventItemEx = {};
TMPlugin.EventItemEx.Parameters = PluginManager.parameters('TMEventItemEx');
TMPlugin.EventItemEx.HelpWindowEnabledItem = TMPlugin.EventItemEx.Parameters['helpWindowEnabledItem'] === '1';
TMPlugin.EventItemEx.HelpWindowEnabledKey = TMPlugin.EventItemEx.Parameters['helpWindowEnabledKey'] === '1';
TMPlugin.EventItemEx.HelpWindowEnabledA = TMPlugin.EventItemEx.Parameters['helpWindowEnabledA'] === '1';
TMPlugin.EventItemEx.HelpWindowEnabledB = TMPlugin.EventItemEx.Parameters['helpWindowEnabledB'] === '1';
TMPlugin.EventItemEx.ShowItemNumberItem = TMPlugin.EventItemEx.Parameters['showItemNumberItem'] === '1';
TMPlugin.EventItemEx.ShowItemNumberKey  = TMPlugin.EventItemEx.Parameters['showItemNumberKey'] === '1';
TMPlugin.EventItemEx.ShowItemNumberA    = TMPlugin.EventItemEx.Parameters['showItemNumberA'] === '1';
TMPlugin.EventItemEx.ShowItemNumberB    = TMPlugin.EventItemEx.Parameters['showItemNumberB'] === '1';
TMPlugin.EventItemEx.NumVisibleRowsItem = +(TMPlugin.EventItemEx.Parameters['numVisibleRowsItem'] || 4);
TMPlugin.EventItemEx.NumVisibleRowsKey  = +(TMPlugin.EventItemEx.Parameters['numVisibleRowsKey'] || 4);
TMPlugin.EventItemEx.NumVisibleRowsA    = +(TMPlugin.EventItemEx.Parameters['numVisibleRowsA'] || 4);
TMPlugin.EventItemEx.NumVisibleRowsB    = +(TMPlugin.EventItemEx.Parameters['numVisibleRowsB'] || 4);
TMPlugin.EventItemEx.FixPlacement       = TMPlugin.EventItemEx.Parameters['fixPlacement'];

(function() {

  //-----------------------------------------------------------------------------
  // Game_Temp
  //

  Game_Temp.prototype.setEventItemSubCategory = function(category) {
    this._eventItemSubCategory = category;
  };

  Game_Temp.prototype.eventItemSubCategory = function() {
    return this._eventItemSubCategory;
  };

  //-----------------------------------------------------------------------------
  // Game_Interpreter
  //

  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'setEventItemSubCategory') {
      $gameTemp.setEventItemSubCategory(args[0]);
    }
  };
  
  //-----------------------------------------------------------------------------
  // Window_EventItem
  //

  Window_EventItem.prototype.isHelpWindowEnabled = function() {
    var itypeId = $gameMessage.itemChoiceItypeId();
    if (itypeId === 1) {
      return TMPlugin.EventItemEx.HelpWindowEnabledItem;
    } else if (itypeId === 2) {
      return TMPlugin.EventItemEx.HelpWindowEnabledKey;
    } else if (itypeId === 3) {
      return TMPlugin.EventItemEx.HelpWindowEnabledA;
    } else if (itypeId === 4) {
      return TMPlugin.EventItemEx.HelpWindowEnabledB;
    }
    return false;
  };

  var _Window_EventItem_start = Window_EventItem.prototype.start;
  Window_EventItem.prototype.start = function() {
    this.height = this.fittingHeight(this.numVisibleRows());
    _Window_EventItem_start.call(this);
    if (this.isHelpWindowEnabled()) this._helpWindow.open();
  };

  var _Window_EventItem_numVisibleRows = Window_EventItem.prototype.numVisibleRows;
  Window_EventItem.prototype.numVisibleRows = function() {
    var itypeId = $gameMessage.itemChoiceItypeId();
    if (itypeId === 1) {
      return TMPlugin.EventItemEx.NumVisibleRowsItem;
    } else if (itypeId === 2) {
      return TMPlugin.EventItemEx.NumVisibleRowsKey;
    } else if (itypeId === 3) {
      return TMPlugin.EventItemEx.NumVisibleRowsA;
    } else if (itypeId === 4) {
      return TMPlugin.EventItemEx.NumVisibleRowsB;
    }
    return _Window_EventItem_numVisibleRows.call(this);
  };

  var _Window_EventItem_updatePlacement = Window_EventItem.prototype.updatePlacement;
  Window_EventItem.prototype.updatePlacement = function() {
    var enabled = this.isHelpWindowEnabled();
    if (!$gameMessage.hasText() && TMPlugin.EventItemEx.FixPlacement) {
      if (TMPlugin.EventItemEx.FixPlacement === 'top') {
        this.y = enabled ? this._helpWindow.height : 0;
      } else {
        this.y = Graphics.boxHeight - this.height;
      }
    } else if (enabled) {
      if (this._messageWindow.y >= Graphics.boxHeight / 2) {
        this.y = this._helpWindow.height;
      } else {
        this.y = Graphics.boxHeight - this.height;
      }
    } else {
      _Window_EventItem_updatePlacement.call(this);
    }
    if (enabled) this._helpWindow.y = this.y - this._helpWindow.height;
  };

  var _Window_EventItem_includes = Window_EventItem.prototype.includes;
  Window_EventItem.prototype.includes = function(item) {
    if (!_Window_EventItem_includes.call(this, item)) return false;
    var subCategory = $gameTemp.eventItemSubCategory();
    return !subCategory || item.meta.subCategory === subCategory;
  };

  var _Window_EventItem_onOk = Window_EventItem.prototype.onOk;
  Window_EventItem.prototype.onOk = function() {
    _Window_EventItem_onOk.call(this);
    this._helpWindow.close();
    $gameTemp.setEventItemSubCategory(null);
  };

  var _Window_EventItem_onCancel = Window_EventItem.prototype.onCancel;
  Window_EventItem.prototype.onCancel = function() {
    _Window_EventItem_onCancel.call(this);
    this._helpWindow.close();
    $gameTemp.setEventItemSubCategory(null);
  };

  Window_EventItem.prototype.needsNumber = function() {
    var itypeId = $gameMessage.itemChoiceItypeId();
    return (itypeId === 1 && TMPlugin.EventItemEx.ShowItemNumberItem) ||
           (itypeId === 2 && TMPlugin.EventItemEx.ShowItemNumberKey) ||
           (itypeId === 3 && TMPlugin.EventItemEx.ShowItemNumberA) ||
           (itypeId === 4 && TMPlugin.EventItemEx.ShowItemNumberB);
  };

  //-----------------------------------------------------------------------------
  // Window_Message
  //

  var _Window_Message_subWindows = Window_Message.prototype.subWindows;
  Window_Message.prototype.subWindows = function() {
    var subWindows = _Window_Message_subWindows.call(this);
    subWindows.push(this._helpWindow);
    return subWindows;
  };

  var _Window_Message_createSubWindows = Window_Message.prototype.createSubWindows;
  Window_Message.prototype.createSubWindows = function() {
    _Window_Message_createSubWindows.call(this);
    this._helpWindow = new Window_Help();
    this._helpWindow.openness = 0;
    this._itemWindow.setHelpWindow(this._helpWindow);
  };

})();